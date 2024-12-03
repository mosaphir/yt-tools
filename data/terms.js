export const termsTemplate = (company, website, email, phone, date) => {
  return `
    # Terms and Conditions for ${company}

    Effective Date: ${date}

    Welcome to ${company}!

    By accessing or using the website ${website}, you agree to be bound by the following terms and conditions:

    ## 1. Use of the Website
    You agree to use this website only for lawful purposes and in accordance with these Terms.

    ## 2. Contact Information
    For any inquiries, please contact us at:
    - Email: ${email}
    - Phone: ${phone}

    ## 3. Modifications
    We reserve the right to update these Terms and Conditions at any time.

    ## 4. Limitation of Liability
    We will not be liable for any damages resulting from the use or inability to use this website.

    ## 5. Governing Law
    These terms are governed by the laws of your jurisdiction.
  `;
};

export const exampleUseCases = `
  - A small business website generating terms for customer use.
  - A blog looking to define its usage rules.
  - An online store generating Terms for checkout pages.
`;
