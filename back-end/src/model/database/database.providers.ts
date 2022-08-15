//import { Professor } from 'src/professor/professor.entity';
import { Disciplina } from 'src/disciplina/entities/disciplina.entity';
import { Turma } from 'src/turma/entities/turma.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '12345',
        database: 'meioameio',
        entities: [ Turma, Disciplina],
        synchronize: true, //toda vez que rodar a aplicação, o nest vai tentar sincronizar o db com as classes
      });

      return dataSource.initialize();
    },
  },
];
