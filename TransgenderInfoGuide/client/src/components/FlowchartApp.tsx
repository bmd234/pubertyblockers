import { useState } from 'react';
import { flowchartNodes, contentSections, type FlowchartNode, type ContentSection } from '@/data/flowchartData';

interface FlowchartButtonProps {
  node: FlowchartNode;
  isActive: boolean;
  onClick: () => void;
}

function FlowchartButton({ node, isActive, onClick }: FlowchartButtonProps) {
  const colorClasses = isActive 
    ? "bg-purple-700 hover:bg-purple-800" 
    : "bg-gray-400 hover:bg-gray-500";

  return (
    <button
      className={`px-4 py-3 rounded-full font-medium text-white text-xs transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 cursor-pointer text-center max-w-[140px] min-h-[50px] leading-tight ${colorClasses}`}
      onClick={onClick}
      aria-pressed={isActive}
      style={{ wordWrap: 'break-word', hyphens: 'auto' }}
    >
      {node.label}
    </button>
  );
}

interface ContentDisplayProps {
  content: ContentSection;
  isActive: boolean;
}

function ContentDisplay({ content, isActive }: ContentDisplayProps) {
  if (!isActive) return null;

  return (
    <div className="bg-purple-700 text-white p-8 rounded-3xl max-w-4xl mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center">{content.title}</h2>
      
      <div className="space-y-6">
        {content.content.text && (
          <p className="text-lg mb-4 text-center font-medium">
            {content.content.text}
          </p>
        )}
        
        {content.content.numbered && (
          <ol className="space-y-3 text-lg">
            {content.content.numbered.map((item, index) => (
              <li key={index} className="flex">
                <span className="font-bold mr-2">{index + 1}.</span>
                <span>
                  {item.includes('histrelin acetate') ? (
                    <>
                      A flexible rod called <u>histrelin acetate</u> goes under the skin of the arm and lasts for 1 year.
                    </>
                  ) : item.includes('leuprolide acetate') ? (
                    <>
                      A shot called <u>leuprolide acetate</u> works for 1, 3, or 4 months at a time.
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ol>
        )}
        
        {content.id === 'physical-effects' && content.content.sections && (
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {content.content.sections.map((section, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="bg-white p-4 rounded-lg flex flex-col items-center min-h-[300px] w-full max-w-[250px]">
                  <div className="w-12 h-12 bg-red-400 rounded-full mb-2"></div>
                  <div className="w-16 h-32 bg-gray-100 border-2 border-gray-300 rounded-lg relative mb-2">
                    {index === 0 && (
                      <>
                        <div className="absolute top-6 left-3 w-4 h-4 bg-green-400 rounded-full"></div>
                        <div className="absolute top-12 left-3 w-4 h-4 bg-purple-400 rounded-full"></div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="absolute top-4 left-6 right-6 h-1 bg-red-400"></div>
                        <div className="absolute top-8 left-6 right-6 h-1 bg-green-400"></div>
                      </>
                    )}
                  </div>
                  <div className="w-8 h-16 bg-gray-100 border-2 border-gray-300 rounded-lg mb-2"></div>
                  <div className="w-6 h-8 bg-purple-400 rounded"></div>
                </div>
                <h3 className="text-white font-bold text-sm text-center">{section.title}</h3>
                <div className="space-y-2">
                  {section.bullets.map((effect, effectIndex) => (
                    <div key={effectIndex} className="bg-red-400 text-white px-3 py-1 rounded text-xs text-center">
                      {effect}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {content.content.sections && content.id !== 'physical-effects' && (
          <div className="grid md:grid-cols-2 gap-8">
            {content.content.sections.map((section, index) => (
              <div key={index}>
                <p className="text-xl mb-4 font-bold">
                  {section.title}
                </p>
                <ul className="space-y-2 text-lg">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>• {bullet}</li>
                  ))}
                </ul>
                {section.note && (
                  <p className="text-sm mt-4 italic">{section.note}</p>
                )}
              </div>
            ))}
          </div>
        )}
        
        {content.content.bullets && !content.content.sections && (
          <ul className="space-y-4 text-lg">
            {content.content.bullets.map((bullet, index) => (
              <li key={index}>
                • {bullet.includes('gender euphoria') ? (
                  <>
                    {bullet.split('gender euphoria')[0]}
                    <u>gender euphoria</u>
                    {bullet.split('gender euphoria')[1]}
                  </>
                ) : bullet.includes('Studies have shown') ? (
                  <u>{bullet}</u>
                ) : (
                  bullet
                )}
              </li>
            ))}
          </ul>
        )}
        
        {content.id === 'next-steps' && (
          <div className="space-y-4">
            <p className="text-lg">• If your child chooses to, they can discontinue puberty blockers, which allows for puberty to continue</p>
            <p className="text-2xl text-center my-6 font-bold">OR</p>
            <p className="text-lg">• Switch from puberty blockers to hormone replacement therapy at ~16 yrs old</p>
            <p className="text-lg ml-8">Transfeminine people → Estradiol</p>
            <p className="text-lg ml-8">Transmasculine people → Testosterone</p>
          </div>
        )}
        
        {content.content.note && (
          <p className="text-sm italic mt-4">{content.content.note}</p>
        )}
      </div>
    </div>
  );
}

function FlowchartDiagram({ activeNodeId, onNodeClick }: { activeNodeId: string; onNodeClick: (nodeId: string) => void }) {
  return (
    <div className="relative mb-12 p-8 min-h-[500px] max-w-7xl mx-auto">
      {/* SVG for connecting lines with arrows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
          </marker>
        </defs>
        
        {/* 3 arrows from PUBERTY BLOCKERS to main categories */}
        <line x1="50%" y1="60" x2="18%" y2="125" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="50%" y1="60" x2="50%" y2="125" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="50%" y1="60" x2="82%" y2="125" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* 3 arrows from WHO USES THEM */}
        <line x1="18%" y1="170" x2="6%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="18%" y1="170" x2="18%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="18%" y1="170" x2="30%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* 2 arrows from ARE THEY SAFE */}
        <line x1="50%" y1="170" x2="44%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="50%" y1="170" x2="56%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* 3 arrows from HOW DO THEY WORK */}
        <line x1="82%" y1="170" x2="70%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="82%" y1="170" x2="82%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="82%" y1="170" x2="94%" y2="235" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        
        {/* 5 arrows to bottom level */}
        <line x1="6%" y1="280" x2="12%" y2="345" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="30%" y1="280" x2="32%" y2="345" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="44%" y1="280" x2="52%" y2="345" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="56%" y1="280" x2="72%" y2="345" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <line x1="94%" y1="280" x2="92%" y2="345" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
      </svg>

      {/* Level 1 - PUBERTY BLOCKERS (top center with spacing) */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2" style={{ zIndex: 10 }}>
        <FlowchartButton
          node={flowchartNodes.find(n => n.id === 'puberty-blockers')!}
          isActive={activeNodeId === 'puberty-blockers'}
          onClick={() => onNodeClick('puberty-blockers')}
        />
      </div>

      {/* Level 2 - Main Categories (with proper spacing) */}
      <div className="absolute top-28" style={{ zIndex: 10, width: '100%' }}>
        <div className="absolute left-[18%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'who-uses-them')!}
            isActive={activeNodeId === 'who-uses-them'}
            onClick={() => onNodeClick('who-uses-them')}
          />
        </div>
        <div className="absolute left-[50%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'are-they-safe')!}
            isActive={activeNodeId === 'are-they-safe'}
            onClick={() => onNodeClick('are-they-safe')}
          />
        </div>
        <div className="absolute left-[82%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'how-do-they-work')!}
            isActive={activeNodeId === 'how-do-they-work'}
            onClick={() => onNodeClick('how-do-they-work')}
          />
        </div>
      </div>

      {/* Level 3 - Sub Categories (with improved spacing to prevent overlap) */}
      <div className="absolute top-56" style={{ zIndex: 10, width: '100%' }}>
        {/* Under WHO USES THEM */}
        <div className="absolute left-[6%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'social-effects')!}
            isActive={activeNodeId === 'social-effects'}
            onClick={() => onNodeClick('social-effects')}
          />
        </div>
        <div className="absolute left-[18%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'criteria-prescription')!}
            isActive={activeNodeId === 'criteria-prescription'}
            onClick={() => onNodeClick('criteria-prescription')}
          />
        </div>
        <div className="absolute left-[30%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'physical-effects')!}
            isActive={activeNodeId === 'physical-effects'}
            onClick={() => onNodeClick('physical-effects')}
          />
        </div>

        {/* Under ARE THEY SAFE - with more spacing from previous branch */}
        <div className="absolute left-[44%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'side-effects')!}
            isActive={activeNodeId === 'side-effects'}
            onClick={() => onNodeClick('side-effects')}
          />
        </div>
        <div className="absolute left-[56%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'will-child-regret')!}
            isActive={activeNodeId === 'will-child-regret'}
            onClick={() => onNodeClick('will-child-regret')}
          />
        </div>

        {/* Under HOW DO THEY WORK - with more spacing from previous branch */}
        <div className="absolute left-[70%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'types-blockers')!}
            isActive={activeNodeId === 'types-blockers'}
            onClick={() => onNodeClick('types-blockers')}
          />
        </div>
        <div className="absolute left-[82%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'next-steps')!}
            isActive={activeNodeId === 'next-steps'}
            onClick={() => onNodeClick('next-steps')}
          />
        </div>
        <div className="absolute left-[94%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'how-administered')!}
            isActive={activeNodeId === 'how-administered'}
            onClick={() => onNodeClick('how-administered')}
          />
        </div>
      </div>

      {/* Level 4 - Bottom row (with better spacing) */}
      <div className="absolute top-80" style={{ zIndex: 10, width: '100%' }}>
        <div className="absolute left-[12%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'where-how-get')!}
            isActive={activeNodeId === 'where-how-get'}
            onClick={() => onNodeClick('where-how-get')}
          />
        </div>
        <div className="absolute left-[32%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'changes-permanent')!}
            isActive={activeNodeId === 'changes-permanent'}
            onClick={() => onNodeClick('changes-permanent')}
          />
        </div>
        <div className="absolute left-[52%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'mediating-side-effects')!}
            isActive={activeNodeId === 'mediating-side-effects'}
            onClick={() => onNodeClick('mediating-side-effects')}
          />
        </div>
        <div className="absolute left-[72%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'other-options')!}
            isActive={activeNodeId === 'other-options'}
            onClick={() => onNodeClick('other-options')}
          />
        </div>
        <div className="absolute left-[92%] transform -translate-x-1/2">
          <FlowchartButton
            node={flowchartNodes.find(n => n.id === 'how-frequently')!}
            isActive={activeNodeId === 'how-frequently'}
            onClick={() => onNodeClick('how-frequently')}
          />
        </div>
      </div>
    </div>
  );
}

export default function FlowchartApp() {
  const [activeNodeId, setActiveNodeId] = useState<string>('puberty-blockers');

  const handleNodeClick = (nodeId: string) => {
    setActiveNodeId(nodeId);
  };

  const activeContent = contentSections.find(section => section.id === activeNodeId);

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <FlowchartDiagram
          activeNodeId={activeNodeId}
          onNodeClick={handleNodeClick}
        />

        {/* Content Display */}
        {activeContent ? (
          <ContentDisplay
            content={activeContent}
            isActive={true}
          />
        ) : (
          <div className="bg-purple-700 text-white p-8 rounded-3xl max-w-4xl mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              SELECT A TOPIC
            </h2>
            <p className="text-lg text-center">
              Click on any topic in the flowchart above to learn more about puberty blockers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}