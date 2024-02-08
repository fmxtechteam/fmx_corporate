export interface IDisclosure {
  faqs: [
    {
      id: number;
      title: string;
      description: string;
    }
  ];
  containerClassName?: string;
}
