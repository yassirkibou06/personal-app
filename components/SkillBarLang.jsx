
const SkillBarLang = ({ skill, percentage }) => {
    const barStyle = {
        width: `${percentage}%`,
    };

    return (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <span className="font-bold text-sm">{skill}</span>
                </div>
                <div>
                    <span className="text-sm">{percentage}%</span>
                </div>
            </div>
            <div className="bg-gray-500 h-1 rounded-full">
                <div className="bg-pry-bleu h-full rounded-full" style={barStyle}></div>
            </div>
        </div>
    );
}

export default SkillBarLang