/*Версия пространства*/
interface IVersion {
  /*Наименование версии*/
  label: string;
  /*Дата создания*/
  date: Date | string;
  /*Описание*/
  description: string;
  /*Скриншоты*/
  images?: string[];
}

/*Пространство*/
export interface ISpace {
  /*Название пространства*/
  name: string;
  /*Иконка*/
  icon: string;
  /*Скриншоты*/
  images: string[];
  /*Описание*/
  description: string;
  /*Версии пространства*/
  versions: IVersion[];
  /*Разделы пространства*/
  sections: ISection[];
}

/*Раздел*/
interface ISection {
  /*Наименование раздела*/
  name: string;
  /*Описание*/
  description: string;
  /*Версии раздела*/
  versions: IVersion[];
  /*Файлы*/
  files: IFile[];
}

/*Фаил*/
interface IFile {
  /*Тэг*/
  tag?: string;
  /*Название файла*/
  name: string | number;
  /*Комментарий*/
  comment?: string | number;
  /*Размер файла*/
  size: number | string;
  /*Ссылка*/
  link: string;
}

export interface IUserSpaceState {
  space: ISpace | null;
  loading: boolean;
  error: unknown;
  fetchSpace: () => void;
}