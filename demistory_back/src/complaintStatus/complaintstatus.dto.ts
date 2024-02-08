import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ComplaintStatusDTO {
  @IsNumber()
  id: number;

  @IsString()
  status: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ComplaintStatusListDTO)
  complaints: ComplaintStatusListDTO[];
}

export class ComplaintStatusListDTO {
  @IsNumber()
  id: number;

  @IsString()
  status: string;
}