import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store';


const SortSelector = () => {
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release Date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ]

    const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    const setSortOrder = useGameQueryStore(s => s.setSortOrder);

    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Sort by: { currentSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList>
                { sortOrders.map((order) => <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>) }
            </MenuList>
        </Menu>
    )
}

export default SortSelector