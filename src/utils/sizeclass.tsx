const enum StyledSize {
    Xxs = 'xxs',
    Xs = 'xs',
    Sm = 'sm',
    Md = 'md',
    Lg = 'lg',
    Xl = 'xl',
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
    Full = 'full',
    S2 = 's2',
    S3 = 's3',
    S4 = 's4',
    Thin = 'thin',
    Regular = 'regular',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}


const enum SizeStylable {
    Container = 'container',
    Title = 'title',
    BorderRadius = 'round',
    Text = 'text',
    Button = 'btn',
    PLayButton = 'btn-play',
    Badge = 'badge',
    Countdown = 'countdown',
    Alert = 'alert',
    Lead = 'lead',
    ProgressBar = 'progress-bar',
    Capitalize = 'ttc',
    Uppercase = 'ttu',
    Lowercase = 'ttl',
    NoneTrans = 'ttn',
    PageHeader = `banner-page`,
    Modal = `modal`
 }

const getSizeStyleClass = (
    item: SizeStylable,
    size?: StyledSize | string,
    alt?: boolean,
) => {
    return (
        item +
        (size ? `-${size}` : '') + // Chỉ thêm size nếu nó được cung cấp
        (alt ? '-alt' : '') // Tùy chọn cho alt class
    );
};

export { SizeStylable, StyledSize, getSizeStyleClass };