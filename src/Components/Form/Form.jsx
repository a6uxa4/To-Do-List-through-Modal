import { useState } from 'react'
import '../Form/Form.css'
import Modal from '../Modal/Modal'

function Form() {
	const [modal, setModal] = useState(false)
	const [value, setValue] = useState('')
	const [next, setNext] = useState([])
	const [proverka, setProverka] = useState()
	const [idModal, setIdModal] = useState(null)
	// -------------------------------------------------------------------------------------------------------------

	function Handle(e) {
		e.preventDefault()
		value === '' ? setProverka('Пустой') : setProverka('')
		if (value === '') {
			return
		}
		setNext((prev) => {
			return [...prev, { value: value, id: Math.random().toString() }]
		})
		setValue('')
	}
	function Delete(d) {
		const o = next.filter((i) => i.id !== d)
		setNext(o)
		setModal(false)
	}

	function openModal(todoId) {
		setIdModal(todoId)
		setModal(true)
	}

	// -----------------------------------------------------------------------------------------------------------------
	return (
		<div className='Form'>
			<div className='Container1'>
				<label>{proverka}</label>
				<input
					type='text'
					placeholder='Заметки...'
					className='InputZametki'
					onChange={(el) => setValue(el.target.value)}
					value={value}
				/>
				<button className='ButtonZametki' onClick={Handle}>
					NEXT
				</button>
			</div>
			<div className='ContainerList'>
				{next.map((item) => {
					return (
						<div className='Container2' key={item.id}>
							<span>{item.value}</span>
							<button
								onClick={() => openModal(item.id)}
								className='deleteModal'
							>
								Delete
							</button>
						</div>
					)
				})}
			</div>
			<Modal
				active={modal}
				setActive={setModal}
				Delete={Delete}
				todoId={idModal}
			/>
		</div>
	)
}

export default Form
