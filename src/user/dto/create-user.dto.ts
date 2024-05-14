import { IsNotEmpty, IsEmail, IsString, MaxLength, MinLength, Matches, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  lastName: string;

  @IsOptional()
  @MaxLength(120)
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(120)
  company: string;

  @IsNotEmpty()
  @IsEmail()
  workEmail: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(120)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]*$/, { message: 'Password does not meet requirements' })
  password: string;
}