import { SVGProps, Ref, forwardRef, memo } from 'react';
import { cn } from '@/utils/classname';

const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { size?: number },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size || 20}
    height={props.size || 20}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
    className={cn('stroke-inherit', props.className)}
  >
    <path
      d="M12 4.75L12 20.75"
      stroke="#313A34"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 12.75L4 12.75"
      stroke="#313A34"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);

export default Memo;
