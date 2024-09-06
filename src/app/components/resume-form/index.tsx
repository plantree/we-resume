export default function ResumeForm() {
  return (
    <div className="flex flex-col gap-4 rounded-md justify-center scrollbar scrollbar-track-gray-100 scrollbar-w-3">
      <section className="flex flex-col bg-white p-4 gap-4">
        <h1 className="text-lg font-bold text-gray-700">基本信息</h1>
        <label className="text-medium font-semibold text-gray-700">
          姓名
          <input
            type="text"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base"
            placeholder="张三"
            name="name"
          />
        </label>
        <label className="text-medium font-semibold text-gray-700">
          电子邮件
          <input
            type="email"
            className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 text-gray-900 shadow-sm outline-none font-normal text-base"
            placeholder="hello@work.com"
            name="email"
          />
        </label>
      </section>
      <section className="flex flex-col bg-white p-4">Work</section>
    </div>
  );
}
