import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { TaskStatus } from '../task.module';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.DONE,
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
  ];
  transform(value: any, _metadata: ArgumentMetadata) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
