import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.findUserByWorkEmail(createUserDto.workEmail);
    if (existingUser) {
      throw new Error('There is already an account with this email');
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({ ...createUserDto, password: hashedPassword });
    return createdUser.save();
  }

  async findUserByWorkEmail(workEmail: string): Promise<User | null> {
    return this.userModel.findOne({ workEmail }).exec();
  }

}