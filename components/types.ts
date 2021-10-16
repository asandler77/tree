export interface PersonType extends PersonalData {
  wife?: string;
  child?: string;
  husband?: string;
  father?: string;
  mother?: string;
  onPersonPress?: (personId: number) => void;
}

export interface PersonalData {
  id: string;
  name: string;
  sureName: string;
  imageUri: string;
}
