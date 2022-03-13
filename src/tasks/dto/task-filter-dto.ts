import { IsEmpty, IsIn, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.module';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS])
  status: TaskStatus;

  @IsOptional()
  @IsEmpty()
  search: string;
}
