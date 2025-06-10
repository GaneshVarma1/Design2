export interface ContactData {
  title: string;
  description: string;
  links: {
    type: 'email' | 'github' | 'linkedin';
    label: string;
    url: string;
  }[];
}

export const contactData: ContactData = {
  title: "GET IN TOUCH",
  description: "Ready to start a new adventure? Let's connect and build something amazing together!",
  links: [
    {
      type: 'email',
      label: 'hello@example.com',
      url: 'mailto:hello@example.com'
    },
    {
      type: 'github',
      label: 'github.com/yourname',
      url: 'https://github.com/yourname'
    },
    {
      type: 'linkedin',
      label: 'linkedin.com/in/yourname',
      url: 'https://linkedin.com/in/yourname'
    }
  ]
}; 