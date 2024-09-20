'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ListPlus } from 'lucide-react';

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

import {
  educationSchema,
  profileSchema,
  projectSchema,
  skillSchema,
  workSchema
} from '../../lib/redux/schema';
import {
  initialEducation,
  initialEducationForTest,
  initialProfileForTest,
  initialProject,
  initialSkill,
  initialWork
} from '@/app/lib/redux/resumeSlice';
import BulletTextarea from '../bullet-textarea';
import { Separator } from '@/components/ui/separator';
import { ResumeEducation } from '@/app/lib/redux/types';
import { isDev } from '@/app/lib/env';

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
    defaultValues: isDev ? initialProfileForTest : {}
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
                  <Input {...field} type="number" placeholder="35" />
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
                <FormLabelMessage label="目标职位 (可选)" />
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
                <Input placeholder="18812345678" {...field} type="tel" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={profileForm.control}
          name="homepage"
          render={({ field }) => (
            <FormItem>
              <FormLabelMessage label="个人主页 (可选)" />
              <FormControl>
                <Input placeholder="personal.com" {...field} type="url" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">保存</Button>
      </form>
    </Form>
  );
}

function EducationFormItem({ payload }: { payload: ResumeEducation }) {
  // 1. define a form
  const educationForm = useForm<z.infer<typeof educationSchema>>({
    resolver: zodResolver(educationSchema),
    defaultValues: payload
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
                  <Input placeholder="4.0" {...field} type="number" />
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
                <BulletTextarea onChange={setAwards} payload={payload.awards} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">保存</Button>
      </form>
    </Form>
  );
}

function EducationForm() {
  const [educationForms, setEducationForms] = React.useState<ResumeEducation[]>([]);

  function handleAdd() {
    setEducationForms([...educationForms, isDev ? initialEducationForTest : initialEducation]);
  }

  return (
    <>
      <h2 className="font-bold mb-4">教育经历</h2>
      {educationForms.map((education, index) => (
        <>
          <EducationFormItem key={index} payload={education} />
          <Separator className="my-4" />
        </>
      ))}
      <Button variant="outline" className="mr-2" onClick={handleAdd}>
        <ListPlus className="w-4 h-4" />
        增加
      </Button>
    </>
  );
}

function ProjectFormItem() {
  // 1. define a form
  const projectForm = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialProject
  });

  // 2. define a submit handler
  function onSubmitProject(data: z.infer<typeof projectSchema>) {
    console.log(data);
  }

  return (
    <Form {...projectForm}>
      <form onSubmit={projectForm.handleSubmit(onSubmitProject)} className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <FormField
            control={projectForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="项目名称" />
                <FormControl>
                  <Input placeholder="微简历" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={projectForm.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabelMessage label="项目链接 (可选)" />
                <FormControl>
                  <Input placeholder="腾讯" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2">
          <FormField
            control={projectForm.control}
            name="date.start"
            render={({ field }) => (
              <FormItem className="basis-1/2">
                <FormLabelMessage label="开始时间" />
                <FormControl>
                  <Input placeholder="2024-06" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={projectForm.control}
            name="date.end"
            render={({ field }) => (
              <FormItem className="basis-1/2">
                <FormLabelMessage label="结束时间" />
                <FormControl>
                  <Input placeholder="2024-09" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={projectForm.control}
          name="descriptions"
          render={({ field }) => (
            <FormItem>
              <FormLabelMessage label="项目描述" />
              <FormControl>
                <BulletTextarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">保存</Button>
      </form>
    </Form>
  );
}

function ProjectForm() {
  // eslint-disable-next-line react/jsx-key
  const [projectForms, setProjectForms] = React.useState([<ProjectFormItem />]);

  function handleAdd() {
    // eslint-disable-next-line react/jsx-key
    setProjectForms([...projectForms, <ProjectFormItem />]);
  }

  return (
    <>
      <h2 className="font-bold mb-4">项目经历</h2>
      {projectForms.map((projectForm, index) => (
        <>
          <div key={index} className="mb-4">
            {projectForm}
          </div>
          <Separator className="my-4" />
        </>
      ))}
      <Button variant="outline" className="mr-2" onClick={handleAdd}>
        <ListPlus className="w-4 h-4" />
        增加
      </Button>
    </>
  );
}

function WorkFormItem() {
  // 1. define a form
  const workForm = useForm<z.infer<typeof workSchema>>({
    resolver: zodResolver(workSchema),
    defaultValues: initialWork
  });

  // 2. define a submit handler
  function onSubmitWork(data: z.infer<typeof workSchema>) {
    console.log(data);
  }

  return (
    <Form {...workForm}>
      <form onSubmit={workForm.handleSubmit(onSubmitWork)} className="flex flex-col gap-4">
        <FormField
          control={workForm.control}
          name="company"
          render={({ field }) => (
            <FormItem className="grow">
              <FormLabelMessage label="公司名称" />
              <FormControl>
                <Input placeholder="腾讯" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-row gap-2">
          <FormField
            control={workForm.control}
            name="position"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="职位" />
                <FormControl>
                  <Input placeholder="工程师" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={workForm.control}
            name="location"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="所在城市 (可选)" />
                <FormControl>
                  <Input placeholder="深圳" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-row gap-2">
          <FormField
            control={workForm.control}
            name="date.start"
            render={({ field }) => (
              <FormItem className="basis-1/2">
                <FormLabelMessage label="开始时间" />
                <FormControl>
                  <Input placeholder="2020-09" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={workForm.control}
            name="date.end"
            render={({ field }) => (
              <FormItem className="basis-1/2">
                <FormLabelMessage label="结束时间" />
                <FormControl>
                  <Input placeholder="2024-06" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">保存</Button>
      </form>
    </Form>
  );
}

function WorkForm() {
  // eslint-disable-next-line react/jsx-key
  const [workForms, setWorkForms] = React.useState([<WorkFormItem />]);

  function handleAdd() {
    // eslint-disable-next-line react/jsx-key
    setWorkForms([...workForms, <WorkFormItem />]);
  }

  return (
    <>
      <h2 className="font-bold mb-4">工作经历</h2>
      {workForms.map((workForm, index) => (
        <>
          <div key={index} className="mb-4">
            {workForm}
          </div>
          <Separator className="my-4" />
        </>
      ))}
      <Button variant="outline" className="mr-2" onClick={handleAdd}>
        <ListPlus className="w-4 h-4" />
        增加
      </Button>
    </>
  );
}

function SkillFormItem() {
  // 1. define a form
  const skillForm = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: initialSkill
  });

  // 2. define a submit handler
  function onSubmitSkill(data: z.infer<typeof skillSchema>) {
    console.log(data);
  }

  return (
    <Form {...skillForm}>
      <form onSubmit={skillForm.handleSubmit(onSubmitSkill)} className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <FormField
            control={skillForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="技能名称" />
                <FormControl>
                  <Input placeholder="React" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={skillForm.control}
            name="level"
            render={({ field }) => (
              <FormItem className="grow">
                <FormLabelMessage label="技能等级" />
                <FormControl>
                  <Input placeholder="熟练" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">保存</Button>
      </form>
    </Form>
  );
}

function SkillForm() {
  // eslint-disable-next-line react/jsx-key
  const [skillForms, setSkillForms] = React.useState([<SkillFormItem />]);

  function handleAdd() {
    // eslint-disable-next-line react/jsx-key
    setSkillForms([...skillForms, <SkillFormItem />]);
  }

  return (
    <>
      <h2 className="font-bold mb-4">技能</h2>
      {skillForms.map((skillForm, index) => (
        <>
          <div key={index} className="mb-4">
            {skillForm}
          </div>
          <Separator className="my-4" />
        </>
      ))}
      <Button variant="outline" className="mr-2" onClick={handleAdd}>
        <ListPlus className="w-4 h-4" />
        增加
      </Button>
    </>
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
      <section className="rounded-md bg-white shadow p-4">
        <WorkForm />
      </section>
      <section className="rounded-md bg-white shadow p-4">
        <ProjectForm />
      </section>
      <section className="rounded-md bg-white shadow p-4">
        <SkillForm />
      </section>
    </div>
  );
}
