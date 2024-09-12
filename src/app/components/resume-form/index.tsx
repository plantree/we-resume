'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { educationSchema, profileSchema } from './schema';
import { initialEducation, initialProfile } from '@/app/lib/redux/resumeSlice';
import BulletTextarea from '../bullet-textarea';

function FormLabelMessage({ label }: { label: string }) {
  return (
    <FormLabel className="flex flex-row gap-4 py-auto font-medium text-gray-700 ">
      {label}
      <FormMessage className="leading-none" />
    </FormLabel>
  );
}

function ProfileForm() {
  // 1. define a form
  const profileForm = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialProfile
  });

  // 2. define a submit handler
  function onSubmitProfile(data: z.infer<typeof profileSchema>) {
    console.log(data);
  }

  return (
    <Form {...profileForm}>
      <h2 className="font-bold mb-4">基本信息</h2>
      <form onSubmit={profileForm.handleSubmit(onSubmitProfile)} className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <FormField
            control={profileForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="姓名" />
                <FormControl>
                  <Input placeholder="张三" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabelMessage label="年龄 (可选)" />
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-row gap-2">
          <FormField
            control={profileForm.control}
            name="targetPosition"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="目标职位" />
                <FormControl>
                  <Input placeholder="工程师" {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={profileForm.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabelMessage label="所在城市" />
                <FormControl>
                  <Input placeholder="上海" {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={profileForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabelMessage label="电子邮件" />
              <FormControl>
                <Input placeholder="hello@job.com" {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={profileForm.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabelMessage label="移动电话" />
              <FormControl>
                <Input placeholder="12345678910" {...field} type="tel" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={profileForm.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabelMessage label="个人主页 (可选)" />
              <FormControl>
                <Input placeholder="personal.com" {...field} type="url" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function EducationForm() {
  // 1. define a form
  const educationForm = useForm<z.infer<typeof educationSchema>>({
    resolver: zodResolver(educationSchema),
    defaultValues: initialEducation
  });

  function setAwards(value: string[]) {
    educationForm.setValue('awards', value);
  }

  // 2. define a submit handler
  function onSubmitEducation(data: z.infer<typeof educationSchema>) {
    console.log(data);
  }

  return (
    <Form {...educationForm}>
      <h2 className="font-bold mb-4">教育经历</h2>
      <form
        onSubmit={educationForm.handleSubmit(onSubmitEducation)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={educationForm.control}
          name="institution"
          render={({ field }) => (
            <FormItem className="grow">
              <FormLabelMessage label="学校名称" />
              <FormControl>
                <Input placeholder="清华大学" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-2">
          <FormField
            control={educationForm.control}
            name="degree"
            render={({ field }) => (
              <FormItem>
                <FormLabelMessage label="学位" />
                <FormControl>
                  <Input placeholder="本科" {...field} />
                </FormControl>
              </FormItem>
            )}
          />{' '}
          <FormField
            control={educationForm.control}
            name="score"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="绩点 (可选)" />
                <FormControl>
                  <Input placeholder="4.0" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2">
          <FormField
            control={educationForm.control}
            name="date.start"
            render={({ field }) => (
              <FormItem className="basis-1/2">
                <FormLabelMessage label="入学时间" />
                <FormControl>
                  <Input placeholder="2020-09" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={educationForm.control}
            name="date.end"
            render={({ field }) => (
              <FormItem className="basis-1/2">
                <FormLabelMessage label="毕业时间" />
                <FormControl>
                  <Input placeholder="2024-06" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={educationForm.control}
          name="awards"
          render={() => (
            <FormItem>
              <FormLabelMessage label="奖励 (可选)" />
              <FormControl>
                <BulletTextarea onChange={setAwards} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default function ResumeForm() {
  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-md bg-white shadow p-4">
        <ProfileForm />
      </section>{' '}
      <section className="rounded-md bg-white shadow p-4">
        <EducationForm />
      </section>{' '}
    </div>
  );
}
