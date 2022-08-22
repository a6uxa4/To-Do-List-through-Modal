import './Modal.css'

function Modal({ active, setActive, Delete, todoId }) {
	return (
		<div className={active ? 'modal active' : 'modal'}>
			<div
				className={active ? 'modal__content active ' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}
			>
				<h2>Вы уверенны удалить?</h2>
				<div className='ContYN'>
					<button onClick={() => setActive(false)} className='ButNo'>
						NO
					</button>
					<button className='ButYes' onClick={() => Delete(todoId)}>
						YES
					</button>
				</div>
			</div>
		</div>
	)
}
export default Modal
