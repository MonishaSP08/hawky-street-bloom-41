
import React from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent } from '@/components/ui/card';

const BeforeAfterFlowChart = () => {
  // Define nodes for the flowchart
  const nodes: Node[] = [
    // Before Hawky Section
    {
      id: 'before-title',
      type: 'input',
      position: { x: 50, y: 50 },
      data: { 
        label: (
          <div className="text-center p-4 bg-red-100 rounded-lg">
            <h3 className="font-bold text-red-800">Before Hawky</h3>
            <p className="text-sm text-red-600">Traditional Street Food Experience</p>
          </div>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },
    {
      id: 'vendor-before-1',
      position: { x: 50, y: 150 },
      data: { 
        label: (
          <Card className="w-64 bg-red-50 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=40&h=40&fit=crop&crop=center" 
                  alt="Street cart" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-semibold text-red-800">Limited Reach</span>
              </div>
              <p className="text-sm text-red-600">Only nearby pedestrians</p>
            </CardContent>
          </Card>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },
    {
      id: 'vendor-before-2',
      position: { x: 50, y: 280 },
      data: { 
        label: (
          <Card className="w-64 bg-red-50 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mr-3">💰</div>
                <span className="font-semibold text-red-800">Cash Only</span>
              </div>
              <p className="text-sm text-red-600">No digital payments</p>
            </CardContent>
          </Card>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },
    {
      id: 'customer-before-1',
      position: { x: 50, y: 410 },
      data: { 
        label: (
          <Card className="w-64 bg-red-50 border-red-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mr-3">🚶</div>
                <span className="font-semibold text-red-800">Physical Visit</span>
              </div>
              <p className="text-sm text-red-600">Must go to street cart</p>
            </CardContent>
          </Card>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },

    // Transformation Arrow
    {
      id: 'transformation',
      position: { x: 400, y: 250 },
      data: { 
        label: (
          <div className="text-center p-6 bg-gradient-to-r from-red-100 to-green-100 rounded-lg border-2 border-dashed border-gray-400">
            <div className="text-4xl mb-2">✨</div>
            <h3 className="font-bold text-gray-800">Hawky Transformation</h3>
            <p className="text-sm text-gray-600">Digital Revolution</p>
          </div>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },

    // After Hawky Section
    {
      id: 'after-title',
      type: 'output',
      position: { x: 650, y: 50 },
      data: { 
        label: (
          <div className="text-center p-4 bg-green-100 rounded-lg">
            <h3 className="font-bold text-green-800">After Hawky</h3>
            <p className="text-sm text-green-600">Digital Street Food Platform</p>
          </div>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },
    {
      id: 'vendor-after-1',
      position: { x: 650, y: 150 },
      data: { 
        label: (
          <Card className="w-64 bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=40&h=40&fit=crop&crop=center" 
                  alt="App interface" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-semibold text-green-800">City-wide Orders</span>
              </div>
              <p className="text-sm text-green-600">Entire neighborhood reach</p>
            </CardContent>
          </Card>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },
    {
      id: 'vendor-after-2',
      position: { x: 650, y: 280 },
      data: { 
        label: (
          <Card className="w-64 bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">💳</div>
                <span className="font-semibold text-green-800">Digital Payments</span>
              </div>
              <p className="text-sm text-green-600">UPI, Cards, Paytm</p>
            </CardContent>
          </Card>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },
    {
      id: 'customer-after-1',
      position: { x: 650, y: 410 },
      data: { 
        label: (
          <Card className="w-64 bg-green-50 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">📱</div>
                <span className="font-semibold text-green-800">Order from Home</span>
              </div>
              <p className="text-sm text-green-600">15-min delivery</p>
            </CardContent>
          </Card>
        )
      },
      style: { background: 'transparent', border: 'none' }
    },
  ];

  // Define edges (connections between nodes)
  const edges: Edge[] = [
    {
      id: 'e1',
      source: 'before-title',
      target: 'vendor-before-1',
      type: 'smoothstep',
      style: { stroke: '#ef4444' },
    },
    {
      id: 'e2',
      source: 'vendor-before-1',
      target: 'vendor-before-2',
      type: 'smoothstep',
      style: { stroke: '#ef4444' },
    },
    {
      id: 'e3',
      source: 'vendor-before-2',
      target: 'customer-before-1',
      type: 'smoothstep',
      style: { stroke: '#ef4444' },
    },
    {
      id: 'e4',
      source: 'customer-before-1',
      target: 'transformation',
      type: 'smoothstep',
      style: { stroke: '#6b7280', strokeDasharray: '5,5' },
      animated: true,
    },
    {
      id: 'e5',
      source: 'transformation',
      target: 'after-title',
      type: 'smoothstep',
      style: { stroke: '#22c55e' },
      animated: true,
    },
    {
      id: 'e6',
      source: 'after-title',
      target: 'vendor-after-1',
      type: 'smoothstep',
      style: { stroke: '#22c55e' },
    },
    {
      id: 'e7',
      source: 'vendor-after-1',
      target: 'vendor-after-2',
      type: 'smoothstep',
      style: { stroke: '#22c55e' },
    },
    {
      id: 'e8',
      source: 'vendor-after-2',
      target: 'customer-after-1',
      type: 'smoothstep',
      style: { stroke: '#22c55e' },
    },
  ];

  return (
    <div className="w-full h-[600px] border rounded-lg bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-left"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background color="#f1f5f9" />
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            if (node.id.includes('before')) return '#fca5a5';
            if (node.id.includes('after')) return '#86efac';
            return '#d1d5db';
          }}
          style={{ background: '#f8fafc' }}
        />
      </ReactFlow>
    </div>
  );
};

export default BeforeAfterFlowChart;
