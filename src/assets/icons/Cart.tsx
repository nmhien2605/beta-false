import { SVGProps, Ref, forwardRef, memo } from 'react';
import { cn } from '@/utils/classname';

const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { size?: number },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 25"
    width={props.size || 20}
    height={props.size || 20}
    fill="none"
    ref={ref}
    {...props}
    className={cn('stroke-inherit', props.className)}
  >
    <path
      d="M3 4.75V4.75C5.20914 4.75 7 6.54086 7 8.75V12.75V12.75C7 14.9591 8.79086 16.75 11 16.75H16.5C16.9643 16.75 17.1965 16.75 17.3921 16.7307C19.2912 16.5437 20.7937 15.0412 20.9807 13.1421C21 12.9465 21 12.7143 21 12.25V12.25C21 11.7857 21 11.5535 20.9807 11.3579C20.7937 9.45882 19.2912 7.95631 17.3921 7.76926C17.1965 7.75 16.9643 7.75 16.5 7.75H11"
      stroke="#313A34"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect x="7" y="18.75" width="3" height="3" rx="1.5" fill="#313A34" />
    <rect x="18" y="18.75" width="3" height="3" rx="1.5" fill="#313A34" />
  </svg>
);

const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);

export default Memo;
