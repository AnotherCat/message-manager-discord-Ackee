import { createElement as h } from 'react'

import useDomains from '../../api/hooks/domains/useDomains'
import useDevices from '../../api/hooks/devices/useDevices'

import CardStatistics from '../cards/CardStatistics'
import RendererList from '../renderers/RendererList'

const RouteDevices = (props) => {

	const domains = useDomains()

	return domains.value.map((domain) => {
		return h(CardStatistics, {
			key: domain.id,
			headline: domain.title,
			onMore: () => props.setRoute(`/domains/${ domain.id }`),
			hook: useDevices,
			hookArgs: [
				domain.id,
				{
					sorting: props.filter.sorting,
					type: props.filter.devicesType,
					range: props.filter.range
				}
			],
			renderer: RendererList,
			rendererProps: {
				sorting: props.filter.sorting,
				range: props.filter.range
			}
		})
	})

}

export default RouteDevices