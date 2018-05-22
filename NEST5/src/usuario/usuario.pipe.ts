import {Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class UsuarioPipe implements PipeTransform {

    constructor(private readonly schema) {}

    transform() {


    }
}