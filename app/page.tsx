'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [response, setResponse] = useState('');

  const simulateAgentWork = async () => {
    if (!input.trim()) return;

    setThinking(true);
    setResponse('');

    // Simulate agent thinking time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate agent response based on input
    const agentResponse = `
      <h4>🤖 Agent Analysis Complete</h4>
      <p><strong>User Query:</strong> "${input}"</p>

      <p><strong>Processing Steps:</strong></p>
      <ul>
        <li>✓ Parsed and understood your request</li>
        <li>✓ Identified relevant tools and knowledge</li>
        <li>✓ Formulated a comprehensive response</li>
        <li>✓ Validated the information</li>
      </ul>

      <p><strong>Agent Response:</strong></p>
      <p>As an AI agent, I can help with various tasks including answering questions,
      analyzing data, writing code, making decisions, and executing multi-step workflows.
      Based on your query, I've processed the information and provided contextually relevant output.</p>

      <p style="margin-top: 1rem; font-style: italic; color: #667eea;">
        This demonstrates how an agent understands context, uses reasoning, and provides intelligent responses.
      </p>
    `;

    setResponse(agentResponse);
    setThinking(false);
  };

  return (
    <div className="container">
      <header>
        <h1>🤖 AI Agent Features</h1>
        <p>Understanding How Intelligent Agents Work</p>
      </header>

      <div className="main-content">
        <div className="intro">
          <h2>What is an AI Agent?</h2>
          <p>
            An AI agent is an autonomous system that perceives its environment, makes decisions,
            and takes actions to achieve specific goals. Unlike simple chatbots, agents can use
            tools, execute complex workflows, and learn from interactions.
          </p>
        </div>

        <h2 style={{ textAlign: 'center', color: '#667eea', marginBottom: '2rem' }}>
          🌟 Core Features of AI Agents
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>
              <span className="feature-icon">🧠</span>
              Reasoning & Planning
            </h3>
            <p>Agents can break down complex problems into manageable steps and create execution plans.</p>
            <ul>
              <li>Task decomposition</li>
              <li>Goal-oriented planning</li>
              <li>Multi-step reasoning</li>
              <li>Adaptive strategies</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <span className="feature-icon">🔧</span>
              Tool Usage
            </h3>
            <p>Access to external tools and APIs extends agent capabilities beyond pure language understanding.</p>
            <ul>
              <li>Code execution</li>
              <li>Web browsing</li>
              <li>Database queries</li>
              <li>API integrations</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <span className="feature-icon">💾</span>
              Memory Management
            </h3>
            <p>Agents maintain context and can recall information across interactions.</p>
            <ul>
              <li>Short-term memory</li>
              <li>Long-term storage</li>
              <li>Context awareness</li>
              <li>Learning from history</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <span className="feature-icon">🎯</span>
              Autonomous Execution
            </h3>
            <p>Agents can work independently to complete tasks without constant supervision.</p>
            <ul>
              <li>Self-directed actions</li>
              <li>Error handling</li>
              <li>Decision making</li>
              <li>Goal completion</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <span className="feature-icon">🔄</span>
              Iterative Improvement
            </h3>
            <p>Learn from feedback and refine approaches over time.</p>
            <ul>
              <li>Feedback processing</li>
              <li>Self-correction</li>
              <li>Performance optimization</li>
              <li>Adaptive learning</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>
              <span className="feature-icon">🌐</span>
              Multi-Modal Understanding
            </h3>
            <p>Process and integrate information from various sources and formats.</p>
            <ul>
              <li>Text processing</li>
              <li>Image analysis</li>
              <li>Data interpretation</li>
              <li>Cross-modal reasoning</li>
            </ul>
          </div>
        </div>

        <div className="workflow-section">
          <h2>How an AI Agent Works: Step-by-Step</h2>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Perception</h3>
                <p>
                  The agent receives input from the user or environment. This could be text,
                  commands, data, or observations about the current state.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Understanding</h3>
                <p>
                  The agent processes and interprets the input using natural language understanding,
                  extracting intent, entities, and context.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Planning</h3>
                <p>
                  Based on the understood input, the agent formulates a plan. This involves breaking
                  down the task, identifying required tools, and determining the sequence of actions.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Execution</h3>
                <p>
                  The agent executes the plan by taking actions. This might involve calling APIs,
                  running code, searching databases, or interacting with other systems.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Observation</h3>
                <p>
                  The agent observes the results of its actions, collecting feedback and new
                  information from the environment.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Reflection & Adaptation</h3>
                <p>
                  The agent evaluates whether the goal was achieved. If not, it adjusts the plan
                  and repeats the cycle. This enables iterative problem-solving.
                </p>
              </div>
            </div>

            <div className="workflow-step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Response</h3>
                <p>
                  Finally, the agent communicates the results back to the user, providing
                  explanations, outputs, or requesting clarification if needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="interactive-demo">
          <h2>🎮 Try the Agent Simulator</h2>
          <p>Enter a query to see how an agent processes and responds to your request</p>

          <div className="demo-container">
            <div className="input-area">
              <input
                type="text"
                placeholder="Ask the agent anything... (e.g., 'How can you help me with data analysis?')"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && simulateAgentWork()}
              />
            </div>

            <button
              className="demo-button"
              onClick={simulateAgentWork}
              disabled={thinking || !input.trim()}
            >
              {thinking ? 'Agent is thinking...' : 'Send to Agent'}
            </button>

            <div className="output-area">
              {thinking ? (
                <div className="thinking">
                  <span>Agent processing</span>
                  <div className="thinking-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              ) : response ? (
                <div className="agent-response" dangerouslySetInnerHTML={{ __html: response }} />
              ) : (
                <p style={{ textAlign: 'center', color: '#999' }}>
                  Agent output will appear here...
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="comparison-section">
          <h2>🔍 Agent vs Traditional Software</h2>
          <div className="comparison-grid">
            <div className="comparison-card agent">
              <h3>✨ AI Agent</h3>
              <ul style={{ listStyle: 'none' }}>
                <li>✓ Understands natural language</li>
                <li>✓ Adapts to new situations</li>
                <li>✓ Learns from feedback</li>
                <li>✓ Handles ambiguity</li>
                <li>✓ Autonomous decision making</li>
                <li>✓ Multi-step reasoning</li>
              </ul>
            </div>

            <div className="comparison-card traditional">
              <h3>⚙️ Traditional Software</h3>
              <ul style={{ listStyle: 'none' }}>
                <li>• Fixed rules and logic</li>
                <li>• Requires specific commands</li>
                <li>• Static behavior</li>
                <li>• Struggles with edge cases</li>
                <li>• Requires explicit programming</li>
                <li>• Single-path execution</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '15px' }}>
          <h2 style={{ textAlign: 'center', color: '#667eea', marginBottom: '1.5rem' }}>
            💡 Key Advantages of AI Agents
          </h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'white', borderRadius: '10px' }}>
              <strong>Flexibility:</strong> Agents can handle a wide variety of tasks without being explicitly programmed for each one.
            </div>
            <div style={{ padding: '1rem', background: 'white', borderRadius: '10px' }}>
              <strong>Scalability:</strong> Can process multiple requests and manage complex workflows simultaneously.
            </div>
            <div style={{ padding: '1rem', background: 'white', borderRadius: '10px' }}>
              <strong>Intelligence:</strong> Leverage large language models and machine learning for sophisticated reasoning.
            </div>
            <div style={{ padding: '1rem', background: 'white', borderRadius: '10px' }}>
              <strong>Efficiency:</strong> Automate repetitive tasks and reduce human workload significantly.
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>🚀 Built to explain AI Agent features and functionality</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          AI Agents represent the future of intelligent automation
        </p>
      </footer>
    </div>
  );
}
