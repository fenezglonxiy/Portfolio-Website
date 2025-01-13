/** @jsxImportSource @emotion/react */

"use client";

import { useTheme } from "@mui/material";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/_components/Button";
import { ArrowRight } from "@/_icons";
import { Form, FormField, TextField } from "@/_components/form";

import getContactForm from "./getContactFormCss";

export type ContactFormProps = React.ComponentPropsWithoutRef<"section">;

const formSchema = z.object({
  name: z.string().nonempty("Please fill in your name"),
  email: z
    .string()
    .nonempty("Please fill in your email")
    .email("Please enter a valid email address"),
  message: z.string().nonempty("Please fill in your message"),
});

function ContactForm(props: ContactFormProps) {
  const theme = useTheme();
  const css = getContactForm(theme);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

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
      <div css={css.container}>
        <Form {...form}>
          <form
            css={css.form}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flow-spacer-y"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <TextField
                  label="Name"
                  placeholder="Enter Your Name"
                  variant="standard"
                  color="black"
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
                  multiline
                  minRows={4}
                  {...field}
                />
              )}
            />
            <div css={css.ctaBox}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                shape="pill"
                size="large"
                icon={<ArrowRight />}
                iconPosition="end"
                disabled={disabled}
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default ContactForm;
