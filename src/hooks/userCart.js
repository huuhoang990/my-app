import {useState} from 'react'

export default function useCart() {
	const [selected, setSelected] = useState()

	return [selected, setSelected]
}
