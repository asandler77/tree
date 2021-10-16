export interface PersonalData {
  id: string;
  name: string;
  sureName: string;
  imageUri: string;
  wife?: string;
  child?: string;
  husband?: string;
  father?: string;
  mother?: string;
  onPersonPress?: (personId: number) => void;
}
