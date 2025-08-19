import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Wie gespielt wird" isOpen={isOpen} handleClose={handleClose}>
      <img src="logo512.png" alt="Mumpfle" width="100%" />
      
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Rate das Wort in 6 Versuchen. Nach jedem Versuch ändern sich die Farben 
        der Kacheln und zeigen dir, wie nah du dem gesuchten Wort warst.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="U" isCompleted={true} />
        <Cell value="R" isCompleted={true} />
        <Cell value="S" isCompleted={true} />
        <Cell value="T" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Der Buchstabe W ist im Wort und an der richtigen Stelle.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="A" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="U"
          status="present"
        />
        <Cell value="L" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Der Buchstabe U ist im Wort, aber an der falschen Stelle.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="O" isCompleted={true} />
        <Cell value="G" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="E" status="absent" />
        <Cell value="L" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Der Buchstabe E kommt im Wort gar nicht vor.
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        Das ist Mumpfi-Version des Wörter-Ratespiels, das wir alle kennen und lieben.
      </p>
    </BaseModal>
  )
}
