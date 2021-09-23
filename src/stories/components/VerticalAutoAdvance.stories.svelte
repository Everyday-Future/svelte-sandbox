<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import VerticalAutoAdvance from '../../components/VerticalAutoAdvance/VerticalAutoAdvance.svelte'

	import PrototypeSVG from '../../components/VerticalAutoAdvance/PrototypeSVG.svelte'

	const carouselItems = [
		{
			title: 'Focus your writing',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
			ctaLinkText: 'Learn more >',
			ctaLinkHref: '#focusYourWriting',
			handbookVectorImgLeft: PrototypeSVG,
			handbookVectorImgRight: PrototypeSVG
		},
		{
			title: 'Develop or break habits',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
			ctaLinkText: 'Learn more >',
			ctaLinkHref: '#developOrBreakHabits',
			handbookVectorImgLeft: PrototypeSVG,
			handbookVectorImgRight: PrototypeSVG
		},
		{
			title: 'Write freeform',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
			ctaLinkText: 'Learn more >',
			ctaLinkHref: '#writeFreeForm',
			handbookVectorImgLeft: PrototypeSVG,
			handbookVectorImgRight: PrototypeSVG
		},
		{
			title: 'Room to doodle',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
			ctaLinkText: 'Learn more >',
			ctaLinkHref: '#roomToDoodle',
			handbookVectorImgLeft: PrototypeSVG,
			handbookVectorImgRight: PrototypeSVG
		},
		{
			title: 'Get inspired',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
			ctaLinkText: 'Learn more >',
			ctaLinkHref: '#getInspired',
			handbookVectorImgLeft: PrototypeSVG,
			handbookVectorImgRight: PrototypeSVG
		}
	]
</script>

<Meta
	title="components/VerticalAutoAdvance"
	component={VerticalAutoAdvance}
	argTypes={{
		carouselItems: { control: 'data' },
		changeoverSeconds: {
			default: 5,
			control: {
				type: 'range',
				min: 1,
				max: 100
			}
		}
	}}
/>

<Template let:args>
	<VerticalAutoAdvance {...args} />
</Template>

<Story name="Default" args={{ carouselItems }} />
<Story name="One Item" args={{ carouselItems: [carouselItems[0]] }} />
<Story name="Two Items" args={{ carouselItems: [carouselItems[0], carouselItems[1]] }} />
<Story name="Ten Items" args={{ carouselItems: [...carouselItems, ...carouselItems] }} />
