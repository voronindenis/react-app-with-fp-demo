// @flow
import * as React from 'react';
import { Modal as SuiModal } from 'semantic-ui-react';

type TProps = {
  createActions?: (closeModal: () => void) => React.Node,
  headerConfig: {
    content: string,
  },
  modalConfig: {
    basic?: boolean,
    size?: string,
  },
};

export const createModal = (
  isModalOpen: boolean, closeModal: () => void, modalContent: ?React.Node,
) => React.memo<TProps>((props: TProps) => (
  <SuiModal
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props.modalConfig}
    open={isModalOpen}
    onClose={closeModal}
  >
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <SuiModal.Header {...props.headerConfig} />
    <SuiModal.Content>
      {modalContent}
    </SuiModal.Content>
    {
      props.createActions && (
        <SuiModal.Actions>
          {props.createActions(closeModal)}
        </SuiModal.Actions>
      )
    }
  </SuiModal>
));
