import { SVGProps, Ref, forwardRef, memo } from 'react';
import { cn } from '@/utils/classname';

const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { size?: number },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    ref={ref}
    {...props}
    className={cn('stroke-inherit', props.className)}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#101828"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 13.333V10m0-3.333h.008M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);

export default Memo;
