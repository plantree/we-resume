import { z } from 'zod';

const profileSchema = z.object({
  name: z.string().min(1, { message: '姓名不能为空' }),
  email: z.string().email({ message: '请输入有效的电子邮件地址' }),
  phone: z.string().length(11, { message: '请输入有效的手机号码' }),
  location: z.string().min(1, { message: '请输入有效的地址' }),
  targetPosition: z.string().optional(),
  age: z.coerce.number({ message: '请输入整数' }).int().optional(),
  url: z.string().optional()
});

const dateSchema = z.object({
  start: z.string().regex(/^\d{4}-\d{2}/, { message: '请输入合法日期 (例如: 2020-09)' }),
  end: z.string().regex(/^\d{4}-\d{2}/, { message: '请输入合法日期 (例如: 2020-09)' })
});

const educationSchema = z.object({
  institution: z.string().min(1, { message: '请输入学校名称' }),
  degree: z.string().min(1, { message: '请输入学位' }),
  date: dateSchema,
  score: z.coerce.number({ message: '请输入数字' }).optional(),
  awards: z.array(z.string())
});

const workSchema = z.object({
  company: z.string().min(1, { message: '请输入公司名称' }),
  position: z.string().min(1, { message: '请输入职位' }),
  location: z.string().optional(),
  date: dateSchema
});

const projectSchema = z.object({
  name: z.string().min(1, { message: '请输入项目名称' }),
  date: dateSchema,
  link: z.string().optional(),
  descriptions: z.array(z.string())
});

const skillSchema = z.object({
  name: z.string().min(1, { message: '请输入技能名称' }),
  level: z.string().min(1, { message: '请输入技能等级' })
});

export { profileSchema, educationSchema, projectSchema, workSchema, skillSchema };
