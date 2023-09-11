export interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonForSparing: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonForSparing,
}) => {
  return (
    <div className="container">
      <label htmlFor="reason">Reason for Sparing : </label>
      <textarea
        data-testid="reason"
        value={reasonForSparing}
        onChange={(e) => {
          e.target.value;
          onChangeReasonForSparing(e);
        }}
      />
    </div>
  );
};

export default ReasonForSparing;
