/*
Imagine para o nosso exemplo anterior o seguinte cenário:
somos uma empresa que administra notas de escolas.
Cada escola tem seu corte de aprovação (no nosso caso, 0.7).
Ótimo, fizemos nosso produto, ele funcionou e agora uma segunda
escola quer ser nossa cliente! Mas o corte de aprovação dela é 0.8.
Precisamos que nosso sistema contemple essa nova realidade.
Aí alteramos as funções approvedStudents e a deixamos assim:
*/


// VERSÃO 2

// ./src/index.ts

//...

type School = {
  name: string;
  approvalGrade: number;
};

type Student = {
  name: string;
  disciplines: Discipline[];
  school: School; // Agora não é mais uma string
};

const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(({ grade }) => grade >= school.approvalGrade);

// Para testar:
const studentsExample = [
  {
    name: 'Lee',
    school: { name: 'Standard', approvalGrade: 0.7 },
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: { name: 'Hogwarts', approvalGrade: 0.8 },
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

// setApproved(studentsExample);






// VERSÃO 1: FUNCIONA, MAS NÃO É IDEAL
// ./src/index.ts

///...

/* Fazemos a modificação da nossa função approvedStudents */
// const approvedStudents = ({ disciplines, school }: Student): boolean =>
//   disciplines.every(({ grade }) => (
//     school === 'Standard' ? grade >= 0.7 : grade >= 0.8
//   ));

// /* Abaixo temos o exemplo de execução com algumas adições */
// const studentsExample = [
//   {
//     name: 'Lee',
//     school: 'Standard',
//     disciplines: [
//       { name: 'matemática', grade: 0.8 },
//       { name: 'história', grade: 0.9 },
//     ],
//   },
//   {
//     name: 'Albus',
//     school: 'Hogwarts',
//     disciplines: [
//       { name: 'divination', grade: 0.8 },
//       { name: 'potions', grade: 0.9 },
//     ],
//   },
// ];

// setApproved(studentsExample);