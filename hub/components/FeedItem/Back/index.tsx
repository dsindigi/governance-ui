import ArrowLeftIcon from '@carbon/icons-react/lib/ArrowLeft';
import { useRouter } from 'next/router';

import cx from '@hub/lib/cx';

interface Props {
  className?: string;
}

export function Content(props: Props) {
  const router = useRouter();

  return (
    <button
      className={cx(
        props.className,
        'flex',
        'group',
        'items-center',
        'space-x-2',
      )}
      onClick={() => router.back()}
    >
      <ArrowLeftIcon className="h-4 w-4 fill-zinc-800 transition-colors group-hover:fill-cyan-500" />
      <div className="text-neutral-700 text-xs transition-colors group-hover:text-cyan-500">
        Back
      </div>
    </button>
  );
}

export function Error(props: Props) {
  return (
    <div
      className={cx(
        props.className,
        'bg-neutral-200',
        'rounded',
        'text-xs',
        'w-16',
      )}
    >
      &nbsp;
    </div>
  );
}

export function Loading(props: Props) {
  return (
    <div
      className={cx(
        props.className,
        'animate-pulse',
        'bg-neutral-200',
        'rounded',
        'text-xs',
        'w-16',
      )}
    >
      &nbsp;
    </div>
  );
}
