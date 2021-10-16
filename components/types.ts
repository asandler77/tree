export interface PersonType extends PersonalData{
  wife?: string;
  child?: string;
  husband?: string;
}

export interface PersonalData {
  name: string;
  imageUri: string;
}
