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
import { toast } from "sonner";
import CarouselUI from "../ui/CarouselUI";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string({ required_error: "Ім'я є обов'язковим" })
    .min(2, "Ім'я повинно містити мінімум 2 символи")
    .max(50, "Ім'я не може бути довшим за 50 символів"),

  fullname: z
    .string({ required_error: "Прізвище є обов'язковим" })
    .min(2, "Прізвище повинно містити мінімум 2 символи")
    .max(50, "Прізвище не може бути довшим за 50 символів"),

  message: z.string(),
});

export default function Comments() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      fullname: "",
      message: "",
    },
    mode: "onChange", // Валідація при зміні поля
  });

  const onSubmit = (data) => {
    console.log("Дані форми:", data);
    // Тут можна додати логіку відправки даних
    toast("Коментарій був відправлений", {
      description: "Дякуємо за відгук!",
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
  return (
    <div>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl m-10">
        Відгуки наших клієнтів
      </h1>
      <div className="my-20">
        <CarouselUI />
      </div>
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl m-10">
        Залиште свій відгук
      </h1>
      <div className="w-1/2 mx-auto">
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
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-gray-700">
                    Текст <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Напишіть свій відгук"
                      {...field}
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />

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
