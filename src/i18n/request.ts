import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const timeZone = "Asia/Ho_Chi_Minh";
  const locale = "vi";

  return {
    locale,
    timeZone,
  };
});
