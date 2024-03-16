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
      d="M21 9.75L17.6569 13.0931C15.6768 15.0732 14.6867 16.0633 13.5451 16.4342C12.5409 16.7605 11.4591 16.7605 10.4549 16.4342C9.31327 16.0633 8.32323 15.0732 6.34315 13.0931L3 9.75"
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
