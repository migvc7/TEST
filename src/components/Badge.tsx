import { onMount } from 'solid-js';

type Props = {
  botContainer: HTMLDivElement | undefined;
  poweredByTextColor?: string;
  badgeBackgroundColor?: string;
};

const defaultTextColor = '#303235';

export const Badge = (props: Props) => {
  let liteBadge: HTMLAnchorElement | undefined;

  onMount(() => {
    // Any necessary initialization when the component mounts, if required
  });

  // Removed onCleanup with observer logic since we are no longer monitoring changes to revert them

  return (
    <span
      style={{
        'font-size': '13px',
        position: 'absolute',
        bottom: 0,
        padding: '10px',
        margin: 'auto',
        width: '100%',
        'text-align': 'center',
        color: props.poweredByTextColor ?? defaultTextColor,
        'background-color': props.badgeBackgroundColor ?? '#ffffff',
      }}
    >
      Powered by
      <a
        ref={liteBadge}
        href={'https://aisystems.ph'}
        target="_blank"
        rel="noopener noreferrer"
        class="lite-badge"
        id="lite-badge"
        style={{ 'font-weight': 'bold', color: props.poweredByTextColor ?? defaultTextColor }}
      >
        <span> AIS</span>
      </a>
    </span>
  );
};
