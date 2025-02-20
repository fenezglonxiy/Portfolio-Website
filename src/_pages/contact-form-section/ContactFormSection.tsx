"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/_components/Button";
import { ArrowRight } from "@/_icons";
import { Form, FormField, TextField } from "@/_components/form";
import sendEmail from "@/_utils/sendEmail";

import ContactFormSectionContent from "./ContactFormSectionContent";
import ContactForm from "./ContactForm";
import ContactFormCTABox from "./ContactFormCTABox";

type Props = Omit<React.ComponentPropsWithoutRef<"section">, "children">;

const formSchema = z.object({
  name: z.string().nonempty("Please fill in your name"),
  email: z
    .string()
    .nonempty("Please fill in your email")
    .email("Please enter a valid email address"),
  message: z.string().nonempty("Please fill in your message"),
});

function ContactFormSection(props: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const isLoading =
    form.formState.isSubmitting || form.formState.isSubmitSuccessful;

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendEmail({
      from: values.email,
      text: `
        ${values.name} - <${values.email}>

        ${values.message}
      `,
      senderName: values.name,
      subject: "Contact - Portfolio Website",
    });

    router.push("/contact-almost-there");
  };

  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    if (form.formState.submitCount === 0) {
      return;
    }

    if (form.formState.isValid) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form.formState.submitCount, form.formState.isValid]);

  return (
    <section {...props}>
      <ContactFormSectionContent>
        <Form {...form}>
          <ContactForm onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <TextField
                  label="Name"
                  placeholder="Enter Your Name"
                  variant="standard"
                  color="black"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <TextField
                  label="Email Address"
                  placeholder="Enter Your Email"
                  variant="standard"
                  color="black"
                  autoComplete="off"
                  {...field}
                />
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <TextField
                  label="Message"
                  placeholder="Write Your Message"
                  variant="standard"
                  color="black"
                  autoComplete="off"
                  multiline
                  minRows={4}
                  {...field}
                />
              )}
            />
            <ContactFormCTABox>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                shape="pill"
                size="large"
                icon={<ArrowRight />}
                iconPosition="end"
                disabled={disabled || isLoading}
                fullWidth
              >
                Submit
              </Button>
            </ContactFormCTABox>
          </ContactForm>
        </Form>
      </ContactFormSectionContent>
    </section>
  );
}

export default ContactFormSection;
