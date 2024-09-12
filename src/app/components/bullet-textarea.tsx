'use client';

import React, { useRef } from 'react';

/**
 * This is like a textarea but with bullet points.
 *
 * Reference: https://stackoverflow.com/questions/57042145/add-bullets-to-each-new-line-within-a-textarea/74998090#74998090
 */
export default function BulletTextarea({ onChange }: { onChange: (value: string[]) => void }) {
  const divEditable = useRef<HTMLDivElement>(null);

  function handleKeyUp(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      console.log(divEditable.current!.innerText);
      onChange(divEditable.current!.innerText.split('\n'));
    }
  }

  return (
    <div className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
      <div
        ref={divEditable}
        className="list-item outline-none text-base ml-4 [&>div]:list-item [&>div]:py-1"
        contentEditable="true"
        onKeyUp={handleKeyUp}
      ></div>
    </div>
  );
}
