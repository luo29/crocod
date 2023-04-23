import { useState } from 'react';
export function useTrigger(trigger: string) {
  const [visible, setVisible] = useState(false);
  console.log(trigger);

  if (trigger === 'click') setVisible(true);
  return {
    visible,
  };
}
