export interface PersonType extends PersonalData{
  wife?: string;
  child?: string;
  husband?: string;
  father?: string;
  mother?: string;
}

export interface PersonalData {
  name: string;
  sureName: string;
  imageUri: string;
}
