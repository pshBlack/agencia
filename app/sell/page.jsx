"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AlertUI from "../ui/AlertUI";
import { toast } from "sonner";

// Покращена схема валідації
const formSchema = z.object({
  name: z
    .string({ required_error: "Ім'я є обов'язковим" })
    .min(2, "Ім'я повинно містити мінімум 2 символи")
    .max(50, "Ім'я не може бути довшим за 50 символів"),

  fullname: z
    .string({ required_error: "Прізвище є обов'язковим" })
    .min(2, "Прізвище повинно містити мінімум 2 символи")
    .max(50, "Прізвище не може бути довшим за 50 символів"),

  email: z
    .string({ required_error: "Email є обов'язковим" })
    .email("Неправильний формат електронної пошти")
    .min(5, "Email занадто короткий"),

  phone: z
    .string({ required_error: "Номер телефону є обов'язковим" })
    .regex(
      /^(\+380|380|0)[0-9]{9}$/,
      "Неправильний формат номеру телефону. Використовуйте формат: +380XXXXXXXXX, 380XXXXXXXXX або 0XXXXXXXXX"
    )
    .transform((val) => {
      // Нормалізуємо номер до формату +380XXXXXXXXX
      if (val.startsWith("0")) {
        return `+38${val}`;
      } else if (val.startsWith("380")) {
        return `+${val}`;
      }
      return val;
    }),
});

export default function Sell() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      fullname: "",
      email: "",
      phone: "",
    },
    mode: "onChange", // Валідація при зміні поля
  });

  const onSubmit = (data) => {
    console.log("Дані форми:", data);
    // Тут можна додати логіку відправки даних
    toast("Дані успішно відправлені", {
      description:
        "Ваш запит був сформований. Ми зв'яжемося з вами найближчим часом",
      action: {
        label: "Закрити",
      },
      type: "success",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    form.reset();
  };

  // Функція для форматування номеру телефону під час введення
  const formatPhoneNumber = (value) => {
    // Видаляємо всі символи, крім цифр та +
    const cleaned = value.replace(/[^\d+]/g, "");

    // Якщо починається з 0, залишаємо як є
    if (cleaned.startsWith("0")) {
      return cleaned.slice(0, 10);
    }
    // Якщо починається з +380, залишаємо як є
    else if (cleaned.startsWith("+380")) {
      return cleaned.slice(0, 13);
    }
    // Якщо починається з 380, залишаємо як є
    else if (cleaned.startsWith("380")) {
      return cleaned.slice(0, 12);
    }
    // Інакше повертаємо як є, але обмежуємо довжину
    return cleaned.slice(0, 13);
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">
          Форма заявки
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Ряд з ім'ям та прізвищем */}
            <div className="flex gap-5 flex-col sm:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-gray-700">
                      Ім'я <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Введіть ваше ім'я"
                        {...field}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-gray-700">
                      Прізвище <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Введіть ваше прізвище"
                        {...field}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>

            {/* Ряд з email та телефоном */}
            <div className="flex gap-5 flex-col sm:flex-row">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-gray-700">
                      Електронна пошта <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        {...field}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-gray-700">
                      Номер телефону <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+380XXXXXXXXX або 0XXXXXXXXX"
                        {...field}
                        onChange={(e) => {
                          const formatted = formatPhoneNumber(e.target.value);
                          field.onChange(formatted);
                        }}
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />
            </div>

            {/* Кнопка відправки */}
            <div className="pt-4">
              <Button
                type="submit"
                className=" py-3 rounded-lg font-medium transition-colors"
              >
                Відправити
              </Button>
            </div>

            {/* Інформація про обов'язкові поля */}
            <p className="text-sm text-gray-500 text-center">
              <span className="text-red-500">*</span> - обов'язкові поля для
              заповнення
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
