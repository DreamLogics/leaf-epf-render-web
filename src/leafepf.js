/****************************************************************************
**
** LEAF EPF Render engine (web)
** http://leaf.dreamlogics.com/
**
** Copyright (C) 2013 DreamLogics
**
** This program is free software: you can redistribute it and/or modify
** it under the terms of the GNU Lesser General Public License as published
** by the Free Software Foundation, either version 3 of the License, or
** (at your option) any later version.
**
** This program is distributed in the hope that it will be useful,
** but WITHOUT ANY WARRANTY; without even the implied warranty of
** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
** GNU Lesser General Public License for more details.
**
** You should have received a copy of the GNU Lesser General Public License
** along with this program.  If not, see <http://www.gnu.org/licenses/>.
**
****************************************************************************/

function EPFReader()
{
	
}

EPFReader.prototype = {
	loadFromURL: function(url)
	{
		
	},
	registerObjectType: function(type, factory)
	{
		
	},
    addPlatform: function(platform)
    {
    	
    },
    setLanguage: function(language)
    {
    	
    },
    addModule: function(module)
    {
    	
    },
    m_ObjectTypes: new Array(),
    m_Platforms: new Array(),
    m_sLanguage: "en",
    m_Modules: new Array()
};

function EPFView(view)
{
	this.m_pView = view;
}

EPFView.prototype = {
	setDocument: function(doc)
	{
		
	},
	setSection: function(section)
	{
		
	},
	nextSection: function()
	{
		
	},
	previousSection: function()
	{
		
	},
	tocSection: function()
	{
		
	},
	onResize: function()
	{
		
	},
	m_pView: 0,
	m_pDocument: 0,
	m_iCurrentSection: 0,
	m_iTOCSection: -1
};

function EPFDocument(platforms,language)
{
	
}

EPFDocument.prototype = {

    sectionCount: function()
    {
    	
    },
    section: function(index)
    {
    	
    },
    sectionByID: function(id)
    {
    	
    },
    addSection: function(section)
    {
    	
    },

    overlayCount: function()
    {
    	
    },
    overlay: function(index)
    {
    	
    },
    overlayByID: function(id)
    {
    	
    },
    addOverlay: function(overlay)
    {
    	
    },

    //stylesheet();

    setActiveOverlay: function(overlay)
    {
    	
    },
    activeOverlay: function()
    {
    	
    },
    property: function(key)
    {
    	
    },
    addProperty: function(key, value)
    {
    	
    },

    addLayout: function(layout)
    {
    	
    },

    layoutByID: function(id, bMakeCurrent)
    {
    	
    },
    currentLayout: function()
    {
    	
    },

    animation: function(id)
    {
    	
    },
    addAnimation: function(id, frames, fps, src)
    {
    	
    },

    epfview: function()
    {
    	
    },
    setEPFView: function(epfview)
    {
    	
    },
    
    resource: function(resource)
    {
    	
    },
    addResource: function(resource, resource_file, extra, /*checksum, */offset, size, size_compressed, type)
    {
    	
    },
};

function EPFLayout()
{
	
}

EPFLayout.prototype = {
	
};

function EPFSection(id,doc)
{
	
}

EPFSection.prototype = {
	createHTML: function()
	{
		
	}
};

function EPFLayer(id,section)
{
	this.m_sID = id;
	this.m_pSection = section;
}

EPFLayer.prototype = {
	objectCount: function()
	{
		
	},
	object: function(index)
	{
		
	},
	createHTML: function()
	{
		
	},
	m_sID: "",
	m_pSection: 0
};

function EPFObject(id,layer)
{
	this.m_sID = id;
	this.m_pLayer = layer;
}

EPFObject.prototype = {
	createHTML: function()
	{
		
	},
	m_sID: "",
	m_pLayer: 0
};

function EPFBlockObject()
{
	this.prototype = new EPFObject();
}

EPFBlockObject.prototype.createHTML = function()
{
	
}
