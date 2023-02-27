import classNames from 'classnames';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type NavigationSegmentTab = {
  title: string;
  segment: string;
};

export type NavigationProps = {
  segmentsTab?: NavigationSegmentTab[];
};

export function Navigation({ segmentsTab = [] }: NavigationProps) {
  const selectedSegment = useSelectedLayoutSegment();
  const selectedSegmentIndex =
    selectedSegment == null
      ? 0
      : segmentsTab.findIndex(({ segment }) => selectedSegment === segment);

  return (
    <div className='py-2 text-sm'>
      {segmentsTab.map(({ title, segment }, index) => (
        <Link key={index} href={`/${segment}`}>
          <span
            className={classNames('p-2', {
              underline: index === selectedSegmentIndex,
            })}
          >
            {title}
          </span>
        </Link>
      ))}
    </div>
  );
}
