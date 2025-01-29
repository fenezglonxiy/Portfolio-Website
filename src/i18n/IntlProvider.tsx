"use client";

import { NextIntlClientProvider } from "next-intl";

type IntlProviderProps = React.ComponentPropsWithoutRef<
  typeof NextIntlClientProvider
>;

function IntlProvider(props: IntlProviderProps) {
  return (
    <NextIntlClientProvider
      onError={(error) => console.error(error)}
      {...props}
    />
  );
}

export default IntlProvider;
