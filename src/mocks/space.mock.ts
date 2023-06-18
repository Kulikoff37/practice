import type { ISpace } from "../types/user-space.types";

export const spaceMock: ISpace = {
  name: 'MKO',
  icon: '',
  images: [],
  description: 'Это описание пространства МКО',
  versions: [
    {
      label: '1.07.09',
      date: '07.02.2023',
      description: 'Это описание версии 1.07.09',
      images: []
    },
    {
      label: '1.07.08',
      date: '07.02.2023',
      description: 'Это описание версии 1.07.08',
      images: []
    },
    {
      label: '1.07.07',
      date: '07.02.2023',
      description: 'Это описание версии 1.07.07',
      images: []
    }
  ],
  sections: [ 
    {
      name: '',
      description: 'Это описание раздела',
      versions: [
        {
          label: '1.07.07',
          date: '07.02.2023',
          description: 'Это описание версии 1.07.07',
        }   
      ],
      files: [
        {
         tag: 'A',
         name: 'application_files_backend.zip',
         comment: 'файлы для установки backend',
         size: '147.7',
         link: ''
        },
        {
          tag: 'A',
          name: 'application_files_backend.zip',
          comment: 'файлы для установки backend',
          size: '147.7',
          link: ''
         }
      ]
    }
  ]
}
