export type ClassData = Readonly<{
  name: string;
  base_attack: number;
  base_defense: number;
  base_hp: number;
  base_pp: number;
}>;
export type ClassDataSignature = Pick<ClassData, "name">;

export type Character = {
  level: number;
  main_class: ClassData;
  main_sp: number;
  sub_class: ClassData;
  sub_sp: number;
};

export type CharacterSignature = Pick<
  Character,
  "level" | "main_sp" | "sub_sp"
> & {
  main_class: ClassDataSignature;
  sub_class: ClassDataSignature;
};
