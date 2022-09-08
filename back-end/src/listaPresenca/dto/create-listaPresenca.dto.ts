import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { Aluno } from 'src/aluno/aluno.entity';
import { Turma } from 'src/turma/turma.entity';

export class CreateListaPresencaDto {

    @IsNotEmpty()
    data: Date;

    @IsNotEmpty()
    turma: Turma

    @IsOptional()
    alunos: Aluno[]
}
